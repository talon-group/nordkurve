import time
import os
import subprocess

def send_notification(title, message):
    subprocess.run(['osascript', '-e', f'display notification "{message}" with title "{title}"'])

def write_goals():
    print("Write down your goals for the next period of work:")
    goals = input()
    with open("goals.txt", "a") as f:
        f.write(goals + "\n")

def start_pomodoro():
    while True:
        print("\n---Pomodoro Starts---")
        for remaining in range(18, 0, -1):
            print(f"\rPlanning Window: {remaining//60:02}:{remaining%60:02} remaining", end='')
            time.sleep(1)
        write_goals()
        send_notification("Pomodoro", "Planning window is finished!")
        
        print("\n---Work Period Starts---")
        for remaining in range(1800, 0, -1):
            print(f"\rWork Period: {remaining//60:02}:{remaining%60:02} remaining", end='')
            time.sleep(1)
        send_notification("Pomodoro", "Work period is finished!")
        
        print("\n---Break Period Starts---")
        for remaining in range(480, 0, -1):
            print(f"\rBreak Period: {remaining//60:02}:{remaining%60:02} remaining", end='')
            time.sleep(1)
        send_notification("Pomodoro", "Break period is finished!")

if __name__ == "__main__":
    if not os.path.exists("goals.txt"):
        open("goals.txt", "w").close()  # Create an empty file if it doesn't exist

    start_pomodoro()
