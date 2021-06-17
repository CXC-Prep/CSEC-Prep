import openpyxl
from helper import Handler

wb = Handler("C:/Users/malique/important_stuff/CSEC-Prep/CSEC Prep.xlsx")

print(wb.get_sheet_names())

topics = wb.get_questions("Additional Mathematics Question")



for topic in topics:
    print(topic.html())
