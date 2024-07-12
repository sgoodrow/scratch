import { uiRoutes } from "@/app/uiRoutes";
import { ClientProviders } from "@/ui/shared/contexts/ClientProviders";
import { font } from "@/ui/theme/font";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: uiRoutes.home.name,
  applicationName: "Scratch",
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    // MUI is working on better support for the scrollbarGutter css property (currently conflicts with Backdrop)
    // and currently suggests this which avoids content layout shift.
    // See: https://github.com/mui/base-ui/issues/79#issuecomment-1966720424
    <html lang="en" className={font.className} style={{ overflowY: "scroll" }}>
      <body>
        <ClientProviders>
          <Box
            component="main"
            height="100vh"
            display="flex"
            flexDirection="column"
          >
            {children}
          </Box>
        </ClientProviders>
      </body>
    </html>
  );
}
