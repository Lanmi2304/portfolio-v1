export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  return vercelUrl?.startsWith("http") ? vercelUrl : `https://${vercelUrl}`;
};
