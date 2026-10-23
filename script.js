const reviewMembershipOptionsButtons = document.querySelectorAll(
  ".review-membership-options-button",
);

const reviewMembershipsSection = document.getElementById("membership-section");

reviewMembershipOptionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reviewMembershipsSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
