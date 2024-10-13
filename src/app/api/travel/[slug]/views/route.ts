import { prisma } from "../../../../../../prisma";
import { getTravel } from "../../../../../utils";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { slug: string } },
) => {
  const { slug } = context.params;

  if (!getTravel({ slug })) return NextResponse.error();

  return NextResponse.json(
    (await prisma.travel.findUnique({
      select: {
        id: true,
        slug: true,
        views: true,
      },
      where: { slug: context.params.slug },
    })) || { views: 0 },
  );
};

export const POST = async (
  request: NextRequest,
  context: { params: { slug: string } },
) => {
  const { slug } = context.params;

  if (!getTravel({ slug })) return NextResponse.error();

  return NextResponse.json(
    await prisma.travel.upsert({
      create: { slug },
      select: {
        id: true,
        slug: true,
        views: true,
      },
      update: {
        views: { increment: process.env.NODE_ENV === "development" ? 0 : 1 },
      },
      where: { slug },
    }),
  );
};
