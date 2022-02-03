context("AplicationTests", () => {
  it("Enter the home page and a video, a header, a footer and a button is exhibited", () => {
    cy.visit("http://localhost:3000");

    cy.get("video").should("have.class", "css-pd2bzu");
    cy.contains("Enter");

    cy.get("header").should("have.class", "css-io8shn");
    cy.get("footer").should("have.class", "css-sahwy8");
  });

  it("Clicks on the button 'enter' to access the dashboard and see the navigation panel and the news", () => {
    // verify button
    cy.get("button").contains("Enter").click();

    // verify navigation panel render
    cy.get("div").should("have.class", "css-7th2b5-MuiGrid-root");

    //  verify news array render
    cy.get("div").should("have.class", "css-vj1n65-MuiGrid-root");

    // verify news array first value render
    cy.get("div").should("have.class", "css-1c202gl-MuiGrid-root");
  });

  it("Clicks on navigation panel buttons to search older news, newer news and sort news", () => {
    // tests the older news display functionality
    cy.contains("mais antigas").click();

    // tests the newer news display functionality
    cy.contains("mais novas").click();

    // get the sort button
    cy.get("button").should(
      "have.class",
      "css-i4e9y6-MuiButtonBase-root-MuiButton-root"
    );

    // tests de sort button
    cy.get("button").contains("Sort").click();
    cy.get("button").contains("Sort").click();
    cy.get("button").contains("Sort").click();
  });

  it("Writes a word in the search field, clicks on the search bitton to find the respectives news", () => {
    // have to use force on line 73 because the cliked icon is removed from dom
    cy.get("div").within(() => {
      cy.get("input").type("nasa");
      cy.get("svg")
        .should("have.class", "css-179qdkp-MuiSvgIcon-root")
        .children();
      cy.get("path").click({ multiple: true, force: true });
    });

    it("After search, clicks on the button again to clear de search field and reset news", () => {
      // have to use force here for the same reason as before
      cy.get("div").within(() => {
        cy.get("svg")
          .should("have.class", "css-179qdkp-MuiSvgIcon-root")
          .children();
        cy.get("path").click({ multiple: true, force: true });
      });
    });
  });

  it("Clicks on the MAIS button to render another 10 results", () => {
    cy.get("button").contains("mais").click();
    cy.get("button").contains("mais").click();
  });

  it("Clicks on the NEWS SITE button to view the original news site", () => {
    cy.get("div").within(() => {
      cy.get("div").should("have.class", "css-1dzn5m3-MuiGrid-root");
      cy.get("a").contains("news site").click();
    });
  });

  it("Clicks on VER MAIS button to view a modal with the news", () => {
    // have to use force here because sometimes the test is to quicly and modal doesn't show in time
    cy.get("div").within(() => {
      cy.get("div").should("have.class", "css-b13pdf");
      cy.get("button").contains("ver mais").click({ force: true });
    });
    cy.get("div")
      .should("have.class", "MuiBox-root css-1qxhzwi")
      .parent(".css-79ws1d-MuiModal-root")
      .click();
  });
});
