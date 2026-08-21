import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEMO_EMAIL = "demo@mindease.app";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { mood, stress, energy, sleep, note } = body;

    let user = await prisma.user.findUnique({
      where: {
        email: DEMO_EMAIL,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: "Sherin",
          email: DEMO_EMAIL,
        },
      });
    }

    const checkIn = await prisma.checkIn.create({
      data: {
        userId: user.id,
        mood,
        stress,
        energy,
        sleep,
        note: note || null,
      },
    });

    return NextResponse.json({
      success: true,
      checkIn,
    });
  } catch (error) {
    console.error("Check-in error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to save check-in.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: DEMO_EMAIL,
      },
      include: {
        checkIns: {
          orderBy: {
            createdAt: "desc",
          },
          take: 7,
        },
      },
    });

    if (!user) {
      return NextResponse.json({
        user: null,
        checkIns: [],
      });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
      },
      checkIns: user.checkIns,
    });
  } catch (error) {
    console.error("Dashboard error:", error);

    return NextResponse.json(
      {
        error: "Unable to load check-ins.",
      },
      { status: 500 }
    );
  }
}