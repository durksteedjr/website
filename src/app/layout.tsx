import "../index.css";

import {
  Box,
  Container,
  Flex,
  Grid,
  LinkBadge,
  OverlayGradient,
  OverlayGrid,
  Spacer,
  Span,
  Stack,
  Wrapper
} from "@durksteedjr/ui";
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";

import {
  BackToTopButton,
  LinkHoverWithPathname,
  QueryClientProvider,
  Text
} from "../components";
import { links, metadata as libMetadata } from "../lib";
import type { LayoutProps } from "../types";

export const metadata = libMetadata;

const nunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito-sans"
});

const Layout = ({ children }: LayoutProps) => (
  <QueryClientProvider>
    <html lang="en">
      <body className={nunitoSans.className}>
        <Wrapper>
          <OverlayGradient />
          <OverlayGrid />
          <Box className="px-6">
            <Container className="flex min-h-screen flex-col py-12 md:py-20">
              <header>
                <Stack>
                  <Flex className="items-center space-x-6 md:space-x-8">
                    <Link href="/">
                      <Box className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 via-cyan-400 to-pink-400 p-1 md:h-28 md:w-28 md:p-[0.375rem]">
                        <Box className="h-full w-full rounded-full bg-white bg-[url('/assets/profile.png')] bg-cover bg-center" />
                      </Box>
                    </Link>
                    <Stack className="space-y-0.5 md:space-y-1">
                      <Span className="text-2xl font-extrabold sm:!text-4xl md:!text-5xl [@media(min-width:355px)]:text-3xl">
                        Durk Steed Jr.
                      </Span>
                      <Text>Catholic, Holistic</Text>
                    </Stack>
                  </Flex>
                </Stack>
              </header>
              <nav>
                <Flex className="mt-8 items-center space-x-6 text-xl font-bold md:space-x-8 md:text-2xl">
                  <LinkHoverWithPathname
                    className="hidden [@media(min-width:355px)]:inline-block"
                    href="/"
                  >
                    Home
                  </LinkHoverWithPathname>
                  {[links.posts, links.prayers, links.work].map(
                    (link) => (
                      <LinkHoverWithPathname
                        href={link.href}
                        key={link.text}
                      >
                        {link.text}
                      </LinkHoverWithPathname>
                    )
                  )}
                  <Spacer />
                  <LinkBadge
                    className="hidden sm:flex"
                    href={links.contact.href}
                    isOutlineArrowUpRight
                  >
                    <Span>{links.contact.text}</Span>
                  </LinkBadge>
                </Flex>
              </nav>
              <Spacer className="mb-32 mt-16 md:mb-40 md:mt-24">
                <main>{children}</main>
              </Spacer>
              <footer>
                <Stack className="space-y-6 md:space-y-8">
                  <Grid className="grid-cols-2 gap-4 md:grid-cols-4">
                    <LinkBadge
                      href={links.contact.href}
                      isOutlineArrowUpRight
                    >
                      {links.contact.text}
                    </LinkBadge>
                    {[
                      links.github,
                      links.instagram,
                      links.linkedIn
                    ].map((link) => (
                      <LinkBadge
                        href={link.href}
                        isOutlineArrowUpRight
                        key={link.text}
                        target="_blank"
                      >
                        {link.text}
                      </LinkBadge>
                    ))}
                  </Grid>
                  <Flex className="items-center space-x-4 text-sm font-light md:space-x-6 md:text-base">
                    {[links.robots, links.sitemap].map(
                      (link) => (
                        <LinkHoverWithPathname
                          href={link.href}
                          key={link.text}
                        >
                          {link.text}
                        </LinkHoverWithPathname>
                      )
                    )}
                    <Spacer />
                    <BackToTopButton />
                  </Flex>
                </Stack>
              </footer>
            </Container>
          </Box>
        </Wrapper>
      </body>
    </html>
  </QueryClientProvider>
);

export default Layout;
