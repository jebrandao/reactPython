"""Curiosidade: interface gráfica com Tkinter (vem com o Python). Rode e clique no botão."""

import tkinter as tk
from tkinter import messagebox


def ao_clicar():
    messagebox.showinfo("Mensagem", "Você clicou no botão!")


janela = tk.Tk()
janela.title("Primeira janela")
tk.Button(janela, text="Clique aqui", command=ao_clicar).pack(padx=40, pady=30)
janela.mainloop()
