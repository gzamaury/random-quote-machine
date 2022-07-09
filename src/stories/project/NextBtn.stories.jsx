import NextBtn from "../../component/NextBtn/NextBtn";

export default {
  title: "Project/NextBtn",
  component: NextBtn,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <NextBtn {...args} />;

export const Default = Template.bind({});
Default.args = {};
