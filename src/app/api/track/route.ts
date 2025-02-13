import { authConfig } from "@/lib/auth.config";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
): Promise<NextResponse<SpotifyApi.UsersTopTracksResponse | any>> {
  const session = await getServerSession(authConfig);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SPOTIFY_API_BASE_URL}/me/top/tracks?time_range=long_term&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      }
    );

    const topTrackList = await res.json();

    return NextResponse.json(topTrackList, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
