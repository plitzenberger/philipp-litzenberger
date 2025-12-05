import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/website.tsx", [index("routes/home.tsx")]),
  route("/tech-team-health-check", "routes/techTeamHealthCheck.tsx"),
] satisfies RouteConfig;
