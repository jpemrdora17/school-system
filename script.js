// ======== SECTION SWITCHING FUNCTION ========
// This function hides all sections and shows only the one clicked in the sidebar
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active');
}
