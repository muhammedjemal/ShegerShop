import smtplib
from email.message import EmailMessage

if request.method == 'POST':
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Compose the email
    msg = EmailMessage()
    msg['Subject'] = 'New Contact Message'
    msg['From'] = email
    msg['To'] = 'muhammedjemal120@gmail.com'
    msg.set_content(f"Name: {name}\nEmail: {email}\nMessage: {message}")

    # Send the email
    with smtplib.SMTP('smtp.example.com', 587) as smtp:
        smtp.starttls()
        smtp.login('your_email@example.com', 'your_password')
        smtp.send_message(msg)
