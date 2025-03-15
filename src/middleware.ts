import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 获取当前路径
  const path = request.nextUrl.pathname;

  // 获取token
  const token = request.cookies.get("token")?.value;
  const isAuthenticated = !!token;

  // 定义公开路径(不需要登录就能访问的路径)
  const publicPaths = ["/login"]; // 修改这里，添加前导斜杠

  // 如果用户已登录且访问登录页，重定向到首页
  if (isAuthenticated && path === "/login") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  // 如果访问的不是公开路径就跳转到登录
  if (!isAuthenticated && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// 配置中间件匹配的路径
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
