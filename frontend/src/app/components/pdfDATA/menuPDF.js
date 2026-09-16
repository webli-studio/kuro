"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function LazyPDFPage({ pageNumber, pageWidth, containerRef }) {
  const pageRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const pageElement = pageRef.current;
    const scrollContainer = containerRef.current;

    if (!pageElement || !scrollContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        root: scrollContainer,
        rootMargin: "800px 0px",
      }
    );

    observer.observe(pageElement);

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={pageRef}
      className="w-fit max-w-full overflow-hidden bg-white shadow-lg"
    >
      {shouldRender && (
        <Page
          pageNumber={pageNumber}
          width={pageWidth}
          renderTextLayer
          renderAnnotationLayer
        />
      )}
    </div>
  );
}

export default function MenuPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(850);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth;

      setPageWidth(Math.min(Math.max(width - 24, 280), 850));
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
            <LazyPDFPage
              key={index}
              pageNumber={index + 1}
              pageWidth={pageWidth}
              containerRef={containerRef}
            />
          ))}
        </div>
      </Document>
    </div>
  );
}