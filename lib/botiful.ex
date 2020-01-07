defmodule Botiful do
 use Plug.Router

 plug Plug.Logger

 plug Plug.Static,
  at: "/",
  from: {:botiful, "priv/static"},
  only: ~w(index.html javascripts stylesheets assets)

  plug Botiful.AgentPlug

  plug :match
  plug :dispatch

  get "/" do
    conn
    |> put_resp_header("content-type", "text/html; charset=utf-8")
    |> send_file(:ok, root())
  end

  defp root do
    Enum.join([:code.priv_dir(:botiful), "/static/index.html"])
  end

  match(_, do: send_resp(conn, :not_found, "not found"))

 end
