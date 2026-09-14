"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MenuPDF() {
  const [numPages, setNumPages] = useState(null);

  return (
    <div
      className="h-[70vh] max-h-[1350px] overflow-y-auto rounded-2xl border-2 border-border-soft bg-wok-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Kuro Sizzlers menu"
    >
      <Document
        file="/menu.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex min-h-[500px] items-center justify-center text-sm font-bold text-primary">
            Loading menu...
          </div>
        }
        error={
          <div className="flex min-h-[500px] items-center justify-center text-sm font-bold text-white">
            Unable to load menu.
          </div>
        }
      >
        <div className="flex flex-col items-center gap-5 py-5">
          {Array.from({ length: numPages || 0 }, (_, index) => (
            <div
              key={index}
              className="w-full max-w-[900px] bg-white shadow-lg"
            >
              <Page
                pageNumber={index + 1}
                width={850}
                renderTextLayer
                renderAnnotationLayer
              />
            </div>
          ))}
        </div>
      </Document>
    </div>
  );
}