export default {
  name: "language",
  title: "Languages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Language Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
