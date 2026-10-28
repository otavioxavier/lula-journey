import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("trajetoria", "routes/trajetoria.tsx"),
  route("fatos", "routes/fatos.tsx"),
  route("perfil", "routes/perfil.tsx"),
  route("quiz", "routes/quiz.tsx"),
] satisfies RouteConfig;
