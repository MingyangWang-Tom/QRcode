import tkinter as tk
import pip

pip.main(['install', 'qrcode'])
import qrcode

def generate_qr_code():
    url = url_entry.get()

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    qr_img = qr.make_image()
    
    qr_img.save("qr_code.png")
    qr_img.show()

# Create the main window
root = tk.Tk()
root.title("QR Code Generator")
window_width = 400
window_height = 150
root.geometry(f"{window_width}x{window_height}")

# Create input labels and entry widgets
url_label = tk.Label(root, text="Enter URL:")
url_label.pack()
url_entry = tk.Entry(root)
url_entry.pack()

generate_button = tk.Button(root, text="Generate QR Code", command=generate_qr_code)
generate_button.pack()

# Start the GUI event loop
root.mainloop()
