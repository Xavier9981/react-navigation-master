export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",

    subRoutes: [
      {
        name: "Student Loans",
        link: "/service/student-loans",
      },
      {
        name: "Scholarships",
        link: "/service/scholarships",
      },
    ],
  },
  {
    name: "Our Team",
    link: "/our-team",

    subRoutes: [
      {
        name: "Board Members",
        link: "/our-team/board-members",
      },
      {
        name: "Committes",
        link: "/our-team/committes",
      },
      {
        name: "Management",
        link: "/our-team/management",
      },
    ],
  },
  {
    name: "Loan Recoveries",
    link: "/loan-recoveries",

    subRoutes: [
      {
        name: "Repay Loan",
        link: "/loan-recoveries/repay-loan",
      },
      {
        name: "Beneficiary",
        link: "/loan-recoveries/beneficiary",
      },
      {
        name: "Partners",
        link: "/loan-recoveries/partners",
      },
    ],
  },
  {
    name: "Notices",
    link: "/notices",

    subRoutes: [
      {
        name: "Downloads",
        link: "/notices/Downloads",
      },
      {
        name: "Procurement",
        link: "/notices/procurement",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
