export function namaIsEmptyException(
  message = "Silahkan masukkan namamu terlebih dahulu!"
) {
  return new Response(
    JSON.stringify({
      message: message,
    }),
    {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
