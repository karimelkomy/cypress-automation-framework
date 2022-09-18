/// <reference types="cypress" />

export const UserDetails = () => {
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();

  return {
    email: `karim.test.${id}@mailinator.com`,
    signUpReason: "Just look around",
    device: "Laptop",
    country: "Egypt",
    place: "Other",
    subject: "Arts"
  };
};
