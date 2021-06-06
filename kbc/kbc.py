from questions import QUESTIONS


def isAnswerCorrect(question, answer):

    '''
    :param question: question (Type JSON)
    :param answer:   user's choice for the answer (Type INT)
    :return:
        True if the answer is correct
        False if the answer is incorrect
    '''

    return True if answer == question["answer"] else False      #remove this


def lifeLine(ques):

    temp=1;
    j=0
    i=0
    while(i<4):
      choice="option"+str(temp) 
      if(ques["answer"]!=temp):
        ques[choice]=""
        j+=1
      if(j>1):
        break
      i+=1
      temp=int(temp)
      temp+=1
    return ques


def kbc():
    '''
        Rules to play KBC:
        * The user will have 15 rounds
        * In each round, user will get a question
        * For each question, there are 4 choices out of which ONLY one is correct.
        * Prompt the user for input of Correct Option number and give feedback about right or wrong.
        * Each correct answer get the user money corresponding to the question and displays the next question.
        * If the user is:
            1. below questions number 5, then the minimum amount rewarded is Rs. 0 (zero)
            2. As he correctly answers question number 5, the minimum reward becomes Rs. 10,000 (First level)
            3. As he correctly answers question number 11, the minimum reward becomes Rs. 3,20,000 (Second Level)
        * If the answer is wrong, then the user will return with the minimum reward.
        * If the user inputs "lifeline" (case insensitive) as input, then hide two incorrect options and
            prompt again for the input of answer.
        * NOTE:
            50-50 lifeline can be used ONLY ONCE.
            There is no option of lifeline for the last question( ques no. 15 ), even if the user has not used it before.
        * If the user inputs "quit" (case insensitive) as input, then user returns with the amount he has won until now,
            instead of the minimum amount.
    '''

    #  Display a welcome message only once to the user at the start of the game.
    print("Welcome to KAUN BANEGA CROREPATI");
    reward=0
    minreward=0
    lifeline_used=False
    #  For each question, display the prize won until now and available life line.
    # For now, the below code works for only one question without LIFE-LINE and QUIT checks
    for i in range(0,15):
     print(f'\tQuestion {i+1}: {QUESTIONS[i]["name"]}' )
     print(f'\t\tOptions:')
     print(f'\t\t\tOption 1: {QUESTIONS[i]["option1"]}')
     print(f'\t\t\tOption 2: {QUESTIONS[i]["option2"]}')
     print(f'\t\t\tOption 3: {QUESTIONS[i]["option3"]}')
     print(f'\t\t\tOption 4: {QUESTIONS[i]["option4"]}')
     ans = input('Your choice ( 1-4 ) : ')
     # check for the input validations

     if (ans=="quit"):
       print(f'\nyou have won: {reward}')
       break
     
     if(ans=="lifeline"):
       if(lifeline_used and i!=14):
         print('\nyou have already used your lifeline')
       elif(i==14):
         print('\nyou cannot use lifeline at this step')
       else:
         lifeLine(QUESTIONS[i])
         lifeline_used=True

       print(f'\tQuestion {i+1}: {QUESTIONS[i]["name"]}' )
       print(f'\t\tOptions:')
       print(f'\t\t\tOption 1: {QUESTIONS[i]["option1"]}')
       print(f'\t\t\tOption 2: {QUESTIONS[i]["option2"]}')
       print(f'\t\t\tOption 3: {QUESTIONS[i]["option3"]}')
       print(f'\t\t\tOption 4: {QUESTIONS[i]["option4"]}')
       ans = input('Your choice ( 1-4 ) : ')
         
    
     #if not in ans(1-4):
       #print('\nEnter valid choice')
       
     if isAnswerCorrect(QUESTIONS[i], int(ans) ):
       print('\nCorrect !')
       # See if the user has crossed a level, print that if yes
       if(i==4):
         minreward=10000
         print('\nyou have entered at level one')   
       if(i==9):
         minreward=320000
         print('\nyou have entered at level two')      
       reward=reward+QUESTIONS[i]["money"];
      # print the total money won.
       print(f'\nyou have won: {reward}')

     else:
        # end the game now.
        # also print the correct answer
        print('\nIncorrect !')
        print(f'\nThe correct answer is: {QUESTIONS[i]["answer"]}')
        print(f'\nyou have won: {minreward}')
        break
    # print the total money won in the end.


kbc()
