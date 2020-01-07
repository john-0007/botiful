defmodule Botiful.AgentPlug do
  import Plug.Conn

  require IEx

  def init(options), do: options

  def call(conn, _opts) do
    IEx.pry
  end
end
