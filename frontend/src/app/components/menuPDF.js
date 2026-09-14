"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MenuPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(850);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth;

      // Keep some breathing room on both sides
      setPageWidth(Math.min(width - 24, 850));
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[70vh] max-h-[1350px] overflow-y-auto overflow-x-hidden rounded-2xl border-2 border-border-soft bg-wok-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Kuro Sizzlers menu"
    >
      <Document
        file="/menu.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex min-h-[500px] items-center justify-center px-6 text-center text-sm font-bold text-primary">
            Loading menu...
          </div>
        }
        error={
          <div className="flex min-h-[500px] items-center justify-center px-6 text-center text-sm font-bold text-white">
            Unable to load menu.
          </div>
        }
      >
        <div className="flex flex-col items-center gap-4 py-4 sm:gap-5 sm:py-5">
          {Array.from({ length: numPages || 0 }, (_, index) => (
            <div
              key={index}
              className="w-fit max-w-full overflow-hidden bg-white shadow-lg"
            >
              <Page
                pageNumber={index + 1}
                width={pageWidth}
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