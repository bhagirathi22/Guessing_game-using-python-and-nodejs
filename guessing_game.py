import random


def play_game():
    number = random.randint(1, 100)
    attempts = 0

    print("I picked a number between 1 and 100.")

    while True:
        try:
            guess = int(input("Your guess: "))
        except ValueError:
            print("Please enter a whole number between 1 and 100.")
            continue

        if not 1 <= guess <= 100:
            print("Please enter a number between 1 and 100.")
            continue

        attempts += 1

        if guess < number:
            print("Too low. Try again.")
        elif guess > number:
            print("Too high. Try again.")
        else:
            print(f"Correct! You guessed the number in {attempts} attempts.")
            break


if __name__ == "__main__":
    play_game()