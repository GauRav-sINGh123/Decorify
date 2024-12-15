import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const { imageUrl, roomType, selectedStyle, requirements } = await req.json();

    if ([imageUrl, roomType, selectedStyle].some((item) => item == null)) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const input = {
      image: imageUrl,
      prompt:
        `A ${roomType} in a ${selectedStyle} style` +
        (requirements ? `, ${requirements}` : ""),
    };

    let replicateOutput;
    try {
      replicateOutput = await replicate.run(
        "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
        { input }
      );
    } catch (replicateError) {
      console.error("Error with Replicate API:", replicateError);
      return NextResponse.json(
        { message: "Failed to process the design" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        newImage: replicateOutput,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in processing design:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
