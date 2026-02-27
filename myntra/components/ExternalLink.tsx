import { openBrowserAsync } from "expo-web-browser";
import { Platform, Pressable } from "react-native";

type Props = { href: string; children: React.ReactNode };

export function ExternalLink({ href, children }: Props) {
  if (Platform.OS === "web") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Pressable onPress={() => openBrowserAsync(href)}>{children}</Pressable>
  );
}
