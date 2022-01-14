export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
      description: "Name of the project",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "date",
      title: "Completion Date",
      type: "date",
    },
    {
      name: "desktopImage",
      title: "Desktop Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "desktopImageTwo",
      title: "Desktop Image Two",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "desktopImageThree",
      title: "Desktop Image Three",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the project",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "string",
      description: "Introduction of the project",
    },
    {
      name: "purpose",
      title: "Purpose and Goal",
      type: "string",
      description:
        "What are you tyring to solve and what do you want it to look like",
    },
    {
      name: "spotlight",
      title: "Spotlight",
      type: "string",
      description: "Particular features or overcome problems which stand out",
    },
    {
      name: "lessons",
      title: "Lessons Learned",
      type: "string",
      description:
        "Information on how you went about the project, what you learned etc",
    },
    {
      name: "techStack",
      title: "Teck Stack",
      description: "What tech are used in this project?",
      type: "array",
      of: [{ type: "reference", to: [{ type: "language" }] }],
    },
    {
      name: "projectType",
      title: "Project Type",
      description: "What type of project is this?",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
      description: "Url to the project repo on Github",
    },
    {
      name: "url",
      title: "Project Url",
      type: "string",
      description: "Url to the live website",
    },
  ],
};
