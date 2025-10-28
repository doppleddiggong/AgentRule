const pptxgen = require("pptxgenjs");
const { html2pptx } = require("@ant/html2pptx");
const path = require("path");

async function generatePresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "YiSan Project Team";
  pptx.company = "YiSan";
  pptx.title = "Alpha 단계 개발 보고서";
  pptx.subject = "2025.10.20 ~ 2025.10.27 개발 보고서";

  const slides = [
    "slide1.html",
    "slide2.html",
    "slide3.html",
    "slide4.html",
    "slide5.html",
    "slide6.html",
    "slide7.html",
    "slide8.html",
  ];

  console.log("Converting HTML slides to PowerPoint...");
  console.log("Font: 배달의 민족 도현체");
  console.log("Color Palette: 모노톤 + 듀얼 엑센트 (Blue #3B82F6, Orange #F97316)\n");
  
  for (let i = 0; i < slides.length; i++) {
    const slideFile = slides[i];
    const slidePath = path.join(__dirname, slideFile);
    
    console.log(`Processing ${slideFile}...`);
    
    try {
      await html2pptx(slidePath, pptx);
      console.log(`  ✓ ${slideFile} converted`);
    } catch (error) {
      console.error(`  ✗ Error converting ${slideFile}:`, error.message);
    }
  }

  const outputFile = "Alpha_Report_2025-10-20_to_2025-10-27.pptx";
  console.log(`\nSaving presentation to ${outputFile}...`);
  
  await pptx.writeFile({ fileName: outputFile });
  
  console.log("✓ Presentation created successfully!");
  console.log(`Output: ${path.join(__dirname, outputFile)}`);
}

generatePresentation().catch((error) => {
  console.error("Error generating presentation:", error);
  process.exit(1);
});
