import openpyxl
from helper import Handler

wb = Handler("C:/Users/malique/important_stuff/CSEC-Prep/CSEC Prep.xlsx")
print("The following are the sheet names:")
print(wb.get_sheet_names())

sheet = input("\nWhich sheet would you like to use?\n")
action = input("\nWould you like to get the topics(t) or questions(q)?\n")

if action == "t":
    topics = wb.get_topics(sheet)
    print("\nTopics:")
    for topic in topics:
        print(topic.html())

elif action == "q":
    questions = wb.get_questions(sheet)
    print("\nQuestions:")
    for question in questions:
        print(question.html())
