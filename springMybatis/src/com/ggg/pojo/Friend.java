package com.ggg.pojo;

public class Friend {
    private String id;
    private String myId;
    private String friendId;
    private User user;
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Friend() {
		super();
	}
	public Friend(String id, String myId, String friendId) {
		super();
		this.id = id;
		this.myId = myId;
		this.friendId = friendId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMyId() {
		return myId;
	}
	public void setMyId(String myId) {
		this.myId = myId;
	}
	public String getFriendId() {
		return friendId;
	}
	public void setFriendId(String friendId) {
		this.friendId = friendId;
	}
	public Friend(String myId, String friendId) {
		super();
		this.myId = myId;
		this.friendId = friendId;
	}
	public Friend(String friendId) {
		super();
		this.friendId = friendId;
	}
    
}
