import type { NextPage } from "next";
import { ArrowSmRightIcon, LightningBoltIcon } from "@heroicons/react/solid";
import { Button, Divider, Modal, Stack, Typography } from "lemon-design-react";
import { useState } from "react";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="h-screen bg-yellow-400 p-10">
      <Stack direction="vertical" spacing="large" align="start">
        <p className="text-8xl">🍋</p>
        <Stack direction="vertical" align="start" className="!gap-8">
          <h1 className="text-8xl font-semibold text-white max-w-[900px] filter drop-shadow">
            A React component library based on Tailwind CSS
          </h1>
          <Stack>
            <Button icon={<ArrowSmRightIcon className="w-4 text-yellow-500" />}>
              View components
            </Button>

            <Button
              icon={<LightningBoltIcon className="w-4 text-yellow-500" />}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Install now
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {modalOpen && (
        <Modal
          contentClassName="!max-w-screen-sm"
          onClose={() => {
            setModalOpen(false);
          }}
          heading="Installation & Setup"
        >
          {({ onClose }) => (
            <Stack direction="vertical" className="w-full !gap-8 p-2">
              <Stack direction="vertical" spacing="large">
                <Stack direction="vertical">
                  <Typography.Heading level={4}>
                    Installation
                  </Typography.Heading>
                  <Divider />
                  <Typography.Paragraph dim>
                    Install through the package manager of your choice.
                  </Typography.Paragraph>
                </Stack>
                <code className="code">{"npm install lemon-design-react"}</code>
              </Stack>

              <Stack direction="vertical" spacing="large">
                <Stack direction="vertical">
                  <Typography.Heading level={4}>
                    Compile classes
                  </Typography.Heading>
                  <Divider />
                  <Typography.Paragraph dim>
                    Add the following to your <code>tailwind.config.js</code>{" "}
                    file in order for your project to compile the css of the
                    components. We do this in order to prevent duplicate classes
                    in your project.
                  </Typography.Paragraph>
                </Stack>
                <code className="code">
                  <pre>{`content: [
  ...,
  "./node_modules/lemon-design-react/src/**/*.tsx"
]`}</pre>
                </code>
              </Stack>

              <Stack direction="vertical" spacing="large">
                <Stack direction="vertical">
                  <Typography.Heading level={4}>
                    Custom styles
                  </Typography.Heading>
                  <Divider />
                  <Typography.Paragraph dim>
                    Since we have some custom classes for components like the{" "}
                    <code>AvatarGroup</code> and <code>Sidebar</code>, you need
                    to import this style sheet in the root of your project.
                  </Typography.Paragraph>
                </Stack>
                <code className="code">
                  {'import "lemon-design-react/dist/lemon.css";'}
                </code>
              </Stack>

              <Stack direction="vertical" spacing="large">
                <Stack direction="vertical">
                  <Typography.Heading level={4}>Form plugin</Typography.Heading>
                  <Divider />
                  <Typography.Paragraph dim>
                    One last thing you will have to do to get the proper styles
                    for the components is to install the{" "}
                    <code>@tailwindcss/forms</code> plugin. This makes sure
                    elements like the input, select & checkbox are easier to
                    style for us.
                  </Typography.Paragraph>
                </Stack>
                <code className="code">npm install -D @tailwindcss/forms</code>
                <Typography.Paragraph dim>
                  And then include it in your <code>tailwind.config.js</code>{" "}
                  file like this
                </Typography.Paragraph>
                <code className="code">
                  {'plugins: [require("@tailwindcss/forms")];'}
                </code>
              </Stack>

              {onClose && (
                <Button
                  onClick={() => {
                    onClose();
                  }}
                  size="small"
                >
                  Close
                </Button>
              )}
            </Stack>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Home;
