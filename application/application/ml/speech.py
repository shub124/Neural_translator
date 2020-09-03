


# Import the required module for text  
# to speech conversion 
from gtts import gTTS 
  
# This module is imported so that we can  
# play the converted audio 
import os 
from playsound import playsound

file1 = open("you.txt","r+")  
  

mytext=file1.readline()


# The text that you want to convert to audio 
#mytext = 'Welcome to geeksforgeeks!'
  
# Language in which you want to convert 
language = 'hi'
  
# Passing the text and language to the engine,  
# here we have marked slow=False. Which tells  
# the module that the converted audio should  
# have a high speed 
myobj = gTTS(text=mytext, lang=language, slow=False) 
  
# Saving the converted audio in a mp3 file named 
# welcome  
myobj.save("welcome4.mp3") 
  
# Playing the converted file 
#playsound(" /home/shubham/Documents/welcome4.mp3") 



