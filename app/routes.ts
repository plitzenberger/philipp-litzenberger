import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // Root redirect based on browser language
  index("routes/language-redirect.tsx"),

  // Locale-prefixed routes with locale validation
  route(":locale", "layouts/locale.tsx", [
    // Home page with website layout (includes header)
    layout("layouts/website.tsx", [index("routes/home.tsx")]),

    // Landing pages without website layout (no header from layout)
    route("tech-team-health-check", "routes/techTeamHealthCheck.tsx"),
  ]),
] satisfies RouteConfig;
