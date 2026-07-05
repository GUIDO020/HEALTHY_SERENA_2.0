import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protect /area-riservata/* and /admin/*
  if (
    (pathname.startsWith("/area-riservata") ||
      pathname.startsWith("/admin")) &&
    !user
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/accesso";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // Protect /admin/* — only allow users with admin role
  if (pathname.startsWith("/admin") && user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role !== "admin") {
      return NextResponse.redirect(new URL("/area-riservata", request.url));
    }
  }

  // If logged-in user visits /accesso, redirect to area riservata
  if (pathname === "/accesso" && user) {
    return NextResponse.redirect(new URL("/area-riservata", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/area-riservata/:path*",
    "/admin/:path*",
    "/accesso",
  ],
};
