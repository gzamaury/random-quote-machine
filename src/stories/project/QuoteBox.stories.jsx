import QuoteBox from "../../component/QuoteBox/QuoteBox";

export default {
  title: "Project/QuoteBox",
  component: QuoteBox,
  argTypes: {
    text: { control: "text" },
    author: { control: "text" },
    onClick: { action: "next-btn" },
  },
};

const Template = (args) => <QuoteBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "A life spent making mistakes is not only more honorable but more useful than a life spent in doing nothing.",
  author: "George Bernard Shaw",
};
