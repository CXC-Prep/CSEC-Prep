import openpyxl
from helper import Handler

wb = Handler("C:/Users/malique/important_stuff/CSEC-Prep/CSEC Prep.xlsx")
print("The following are the sheet names:")
print(wb.get_sheet_names())

sheet = input("\nWhich sheet would you like to use?\n")
action = input("\nWould you like to get the topics(t) or questions(q)?\n")

if action == "t":
    topics = wb.get_topics(sheet)

    topics_html = ["""\t\t\t\t<label><input type="checkbox" id="select-all" name = "all", value = "all" onclick="select_all()" checked = "true"><span>Select All</span></span></label>
                <label>\n\t\t\t\t<input type="checkbox" id="select-none", value = "none" onclick="select_none()" ><span>None</span></label>
                """].extend(list(map(lambda x: x.html(), topics)))
                
    print('\n'.join(topics_html))

    wb.insert(f"C:/Users/malique/important_stuff/CSEC-Prep/{sheet}.html", "topic", '\n'.join(topics_html))

elif action == "q":
    questions = wb.get_questions(sheet)

    questions_html = list(map(lambda x: x.html(), questions))
    print('\n'.join(questions_html))

    wb.insert(f"C:/Users/malique/important_stuff/CSEC-Prep/{sheet}.html", "question", '\n'.join(questions_html))