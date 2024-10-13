import {
  BackgroundGradient,
  BackgroundGrid,
  BackToTopButton,
  Card,
  Container,
  Header,
  Link,
  Spacer,
  Text,
  Wrapper,
} from "../components";
import "../index.css";
import { metadata as libMetadata, links } from "../lib";
import { QueryClientProvider } from "../providers";
import { ohana } from "@ohanaui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

export const metadata = libMetadata;

const Layout = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider>
    <ohana.html lang="en">
      <Wrapper asChild>
        <ohana.body>
          <BackgroundGradient className="absolute left-0 top-0 z-[-20] h-full max-h-[1000px] w-full" />
          <BackgroundGrid className="absolute left-0 top-0 z-[-10] h-full max-h-[1000px] w-full" />
          <Container
            className="flex min-h-[calc(100vh-6rem)] flex-col gap-y-8 md:min-h-[calc(100vh-10rem)]"
            isCenter
          >
            <Header />
            <ohana.nav className="flex items-center space-x-6 md:space-x-8">
              {[links.home, links.prayers, links.travel, links.work].map(
                ({ href, text, ...props }, index) => (
                  <Link
                    className={
                      (index === 0 && "hidden sm:inline") ||
                      (index === 1 && "!ml-0 sm:!ml-6 md:!ml-8")
                    }
                    href={href}
                    key={href}
                    textProps={{ asChild: true, size: "l" }}
                    {...props}
                  >
                    {text}
                  </Link>
                ),
              )}
              <Spacer />
              <Text asChild className="hidden sm:inline-block" size="s">
                <Card asChild isHover size="s">
                  <NextLink href={links.contact.href}>
                    {links.contact.text}
                  </NextLink>
                </Card>
              </Text>
            </ohana.nav>
            <Spacer asChild className="mb-20 mt-8 md:mb-28 md:mt-16">
              <ohana.main>{children}</ohana.main>
            </Spacer>
            <ohana.footer className="space-y-6 md:space-y-8">
              <ohana.div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Text asChild size="s">
                  <Card asChild isHover size="s">
                    <NextLink href={links.contact.href}>
                      {links.contact.text}
                    </NextLink>
                  </Card>
                </Text>
                {[links.github, links.instagram, links.linkedIn].map((link) => (
                  <Text asChild key={link.text} size="s">
                    <Card asChild isHover size="s">
                      <NextLink href={link.href} target="_blank">
                        {link.text}
                      </NextLink>
                    </Card>
                  </Text>
                ))}
              </ohana.div>
              <ohana.div className="flex items-center space-x-4 md:space-x-6">
                {[links.robots, links.sitemap].map((link) => (
                  <Link
                    href={link.href}
                    key={link.text}
                    textProps={{ isHover: true, size: "s" }}
                  >
                    {link.text}
                  </Link>
                ))}
                <Spacer />
                <BackToTopButton />
              </ohana.div>
            </ohana.footer>
          </Container>
        </ohana.body>
      </Wrapper>
    </ohana.html>
  </QueryClientProvider>
);

export default Layout;
