# Point Cloud Viewer

Point cloud viewer that can read LAS (LAZ untested) files and display them in Girder item browser using vtk.js

# Contact

Contact kitware@kitware.com for questions regarding using Point Cloud Viewer

# License

Copyright 2017 Kitware Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

# Setup
Have the latest [girder](http://girder.readthedocs.io/en/latest/installation.html#install-from-git-repository) up and running  
Clone this repo to e.g. ~/pointcloud_viewer  
Execute `girder-install plugin -s ~/pointcloud_viewer` within the girder virtualenv  
Execute `girder-install web --dev --plugins pointcloud_viewer`  
Run `girder-server`  
Navigate to `localhost:8080` and create a user and a file assetstore and enable this Vaui plugin  
Upload a compatible video like [this](https://www.w3schools.com/html/mov_bbb.mp4) to a Restart server with `girder-server`  
Navigate to `localhost:8080` and navigate to a LAS file  
Click on globe icon  