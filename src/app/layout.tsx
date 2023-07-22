import "../index.css";

import type { LayoutProps } from "../types";

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default Layout;
