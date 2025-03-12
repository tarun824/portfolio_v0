function DownloadResumeOnClick() {
  const pdfUrl = "/documents/Tarun_R_S_Resume.pdf";
  window.open(pdfUrl, "_blank");
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Tarun_R_S_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export default DownloadResumeOnClick;
