import { generateResume } from '@/app/actions/generateResume';
import { NextResponse } from 'next/server';

export async function GET() {
    const pdfBlob = await generateResume();
    return new NextResponse(pdfBlob, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="resume.pdf"',
        },
    });
}
