from time import sleep
import datetime
import os
import picamera

duration = 10 #in hours
delay = 5 #in minutes


folder = datetime.datetime.now().strftime('%Y-%m-%d %H_%M_%S')

os.makedirs(folder)
os.chdir(folder)

print 'made folder'


camera = picamera.PiCamera()
camera.resolution = (1024, 768)
# camera.vflip = True

interval = delay*60 #in secs
frames = (duration*60*60) / interval #in secs

# camera.start_preview()

for i in range(frames):
    camera.capture('image{0:04d}.jpg'.format(i))
    print i
    sleep(interval)

# camera.stop_preview()


# os.system('convert -delay 1 -loop 0 image*.jpg animation.gif')
# os.system('avconv -r 10 -i image*.jpg -r 10 -vcodec libx264 -crf 20 -g 15 animation.mp4')
print 'animation done'