"""
Quick script to update schedule csv file. Pass information through arguments. 

The date must always be the first argument (excluding flags) 
To keep the default time and location type '--defaults'

"""
import pandas as pd
import sys

csv_path = "../files/schedule.csv"  

class term:
  def __init__(self):
    self = self 

  class colors:
    BLACK  = "\33[30m"
    RED    = "\33[31m"
    GREEN  = "\33[32m"
    YELLOW = "\33[33m"
    BLUE   = "\33[34m"
    VIOLET = "\33[35m"
    BEIGE  = "\33[36m"
    WHITE  = "\33[37m"
    ENDC   = "\33[0m"

  def printc(self, str):
    print(f"{str}{self.colors.ENDC}")

tm = term() 
args = sys.argv[1:]

didx = -1 
ok = True
for i in range(len(args)):
  if args[i] == "--defaults":
    didx = i
    break
  elif "--" in args[i]: 
    ok = False
    tm.printc(f"{tm.colors.RED}Unknown flag") 
    
date, time, loc, message = None, None, None, None
if not (didx == -1): 
  args.pop(didx)
  date = args[0]
  time = "2:55"
  loc = "411"
  message = " ".join(args[1:])  
elif ok:
  date = args[0]
  time = args[1]
  loc = args[2]
  message = " ".join(args[3:]) 

if date == None or time == None or loc == None or message == None:
  ok = False

if ok:
  df = pd.read_csv(csv_path)
  df.columns = ["Date", "Time", "Location", "Message"]
  df.loc[-1] = [date, time, loc, message] 
  df.index = df.index + 1 
  df.sort_index()
  df.to_csv(csv_path, index=False)
  tm.printc(f"{tm.colors.GREEN}Process complete. Update schedule at {csv_path}.")
else: 
  tm.printc(f"{tm.colors.YELLOW}Did not update file. Check your arguments to make sure they match and try again.")
