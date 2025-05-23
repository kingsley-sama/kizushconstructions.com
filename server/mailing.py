import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from schema import MessageRequest
from datetime import datetime
from config import settings
import re
def send_email_notification(message: MessageRequest):
    try:
        # Create email message
        email_message = MIMEMultipart()
        email_message["From"] = settings.SMTP_USERNAME
        email_message["To"] = settings.NOTIFICATION_EMAIL
        email_message["Subject"] = "New Message Received"
        
        body = f"""
        You have received a new message:
        
        From: {message.sender_name} ({message.sender_email})
        Subject: {message.sender_name}
        
        Message:
        {message.message}
        
        Received at: {datetime.utcnow()}
        """
        
        email_message.attach(MIMEText(body, "plain"))
        # Connect to SMTP server and send email
        with smtplib.SMTP(settings.SMTP_SERVER, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.send_message(email_message)
        
        return True
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False