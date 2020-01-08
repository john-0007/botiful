defmodule Botiful.AgentPlug do
  import Plug.Conn



  @headless_chrome "HeadlessChrome"

  def init(options), do: options

  def call(conn, _options) do
   with %{"user-agent" => ua} <- Enum.into(conn.req_headers, %{}),
      true <- ua =~ @headless_chrome
  do
    assign(conn, :type, :headless_chrome)
  else
   _ -> bot_or_user(conn)
  end
  end

  defp bot_or_user(conn) do
    if Browser.bot?(conn),
      do: assign(conn, :type, :bot),
      else: assign(conn, :type, :user)
  end
end
