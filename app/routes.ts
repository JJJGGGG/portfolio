import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/initial_layout.tsx", [
        index("routes/home.tsx"),
    ]),
    layout("./layouts/layout.tsx", [
        route("about", "routes/about.tsx"),
        route("projects", "routes/projects.tsx"),
    ])
] satisfies RouteConfig;
