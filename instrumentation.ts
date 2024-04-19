export async function register() {
  // https://github.com/sainsburys-tech/next-logger/issues/13#issuecomment-1763535453
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await require("pino");
    await require("next-logger");
  }
}
